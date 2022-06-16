/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package de.hybris.vivo.fulfilmentprocess.jalo;

import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import de.hybris.vivo.fulfilmentprocess.constants.VivoFulfilmentProcessConstants;

public class VivoFulfilmentProcessManager extends GeneratedVivoFulfilmentProcessManager
{
	public static final VivoFulfilmentProcessManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (VivoFulfilmentProcessManager) em.getExtension(VivoFulfilmentProcessConstants.EXTENSIONNAME);
	}
	
}
